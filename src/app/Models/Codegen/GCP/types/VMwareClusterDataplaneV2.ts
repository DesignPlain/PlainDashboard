export interface VMwareClusterDataplaneV2 {
  // Enable advanced networking which requires dataplane_v2_enabled to be set true.
  AdvancedNetworking?: boolean;

  // Enables Dataplane V2.
  DataplaneV2Enabled?: boolean;

  // Enable Dataplane V2 for clusters with Windows nodes.
  WindowsDataplaneV2Enabled?: boolean;
}
