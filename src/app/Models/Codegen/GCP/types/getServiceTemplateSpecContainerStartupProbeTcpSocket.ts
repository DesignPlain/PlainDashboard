export interface getServiceTemplateSpecContainerStartupProbeTcpSocket {
  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;
}