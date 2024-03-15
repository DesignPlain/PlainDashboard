export interface getServiceTemplateContainerLivenessProbeTcpSocket {
  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the exposed port of the container, which
is the value of container.ports[0].containerPort.
*/
  Port?: number;
}
