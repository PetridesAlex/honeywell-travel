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

const hasGreekCharacters = (value) => /[\u0370-\u03FF\u1F00-\u1FFF]/.test(value || '')

export const getEnglishPackageTitle = (packageId, originalTitle, destination, i18n) => {
  // Specific naming preferences requested by the business.
  if (originalTitle?.includes('ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ')) {
    return originalTitle.replaceAll('ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ', 'Constantinople')
  }

  const translationKey = `packages.${packageId}.title`
  const englishT = i18n?.getFixedT ? i18n.getFixedT('en') : null
  const translatedEn = englishT ? englishT(translationKey, { defaultValue: null }) : null

  // Prefer explicit English translations when present in i18n.
  if (translatedEn && translatedEn !== translationKey) {
    return translatedEn
  }

  // If title is already non-Greek, keep it as the English line.
  if (!hasGreekCharacters(originalTitle)) {
    return originalTitle
  }

  // Fallback for packages without an English mapping.
  return destination ? `${destination} Package` : 'Travel Package'
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
