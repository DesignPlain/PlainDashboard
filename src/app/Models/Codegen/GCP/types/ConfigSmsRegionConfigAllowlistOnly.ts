export interface ConfigSmsRegionConfigAllowlistOnly {
  // Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  AllowedRegions?: Array<string>;
}
