export interface EnterpriseKeyAndroidSettings {
  // If set to true, it means allowed_package_names will not be enforced.
  AllowAllPackageNames?: boolean;

  // Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  AllowedPackageNames?: Array<string>;
}
