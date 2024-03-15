export interface BareMetalClusterOsEnvironmentConfig {
  /*
Whether the package repo should not be included when initializing
bare metal machines.
*/
  PackageRepoExcluded?: boolean;
}
