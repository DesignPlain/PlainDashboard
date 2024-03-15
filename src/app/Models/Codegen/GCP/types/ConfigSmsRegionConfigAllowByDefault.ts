export interface ConfigSmsRegionConfigAllowByDefault {
  // Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  DisallowedRegions?: Array<string>;
}
