// OCR functionality disabled — reverted to stable app state
export const verifyLicense = async (req, res) => {
  res.status(404).json({ success: false, message: 'OCR disabled' });
}
