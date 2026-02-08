// Helper function to get translated package title
// This checks if there's a translation in the i18n files, otherwise returns the original title
export const getTranslatedPackageTitle = (packageId, originalTitle, i18n) => {
  const translationKey = `packages.${packageId}.title`
  const translated = i18n.t(translationKey, { defaultValue: null })
  
  // If translation exists and is different from the key, use it
  if (translated && translated !== translationKey) {
    return translated
  }
  
  // Otherwise return original title
  return originalTitle
}

// Helper function to get translated package description
export const getTranslatedPackageDescription = (packageId, originalDescription, i18n) => {
  const translationKey = `packages.${packageId}.description`
  const translated = i18n.t(translationKey, { defaultValue: null })
  
  if (translated && translated !== translationKey) {
    return translated
  }
  
  return originalDescription
}
