export interface getServiceTemplateScaling {
  // Maximum number of serving instances that this resource should have.
  MaxInstanceCount?: number;

  // Minimum number of serving instances that this resource should have.
  MinInstanceCount?: number;
}
