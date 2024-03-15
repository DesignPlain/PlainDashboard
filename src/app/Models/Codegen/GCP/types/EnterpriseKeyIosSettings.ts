export interface EnterpriseKeyIosSettings {
  // iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
  AllowedBundleIds?: Array<string>;

  // If set to true, it means allowed_bundle_ids will not be enforced.
  AllowAllBundleIds?: boolean;
}
