export interface FeatureMembershipMesh {
  // --DEPRECATED-- Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
  ControlPlane?: string;

  // Whether to automatically manage Service Mesh. Can either be `MANAGEMENT_AUTOMATIC` or `MANAGEMENT_MANUAL`.
  Management?: string;
}
