export interface DeploymentTargetImport {
  // The full contents of the template that you want to import.
  Content?: string;

  /*
The name of the template to import, as declared in the YAML
configuration.

- - -
*/
  Name?: string;
}
