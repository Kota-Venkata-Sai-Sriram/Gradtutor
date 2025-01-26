import Tesseract from 'tesseract.js';

interface VerificationResult {
  isValid: boolean;
  confidence: number;
  message: string;
}

export async function verifyCertificate(file: File): Promise<VerificationResult> {
  try {
    // Convert file to image data URL
    const imageUrl = await fileToDataUrl(file);
    
    // Perform OCR on the certificate
    const { data: { text, confidence } } = await Tesseract.recognize(
      imageUrl,
      'eng',
      {
        logger: m => console.log(m)
      }
    );

    // Verification rules
    const hasInstituteName = /university|institute|college/i.test(text);
    const hasDate = /\d{2}[/-]\d{2}[/-]\d{4}/.test(text);
    const hasRegistrationNumber = /reg|registration|roll|enrollment/i.test(text);
    const hasDegreeTerms = /degree|diploma|certificate|bachelor|master|phd/i.test(text);
    
    // Calculate verification score
    const checks = [hasInstituteName, hasDate, hasRegistrationNumber, hasDegreeTerms];
    const score = checks.filter(Boolean).length / checks.length;
    
    // Verification result
    const isValid = score >= 0.75 && confidence > 70;
    
    return {
      isValid,
      confidence,
      message: isValid 
        ? "Certificate appears to be valid"
        : "Certificate validation failed. Please ensure you're uploading a clear, official document."
    };
  } catch (error) {
    console.error('Certificate verification error:', error);
    return {
      isValid: false,
      confidence: 0,
      message: "Error verifying certificate. Please try again with a clearer image."
    };
  }
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}