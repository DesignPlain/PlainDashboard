export interface ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /*
Mode for how the GPU driver is installed.
Accepted values are:
- `"GPU_DRIVER_VERSION_UNSPECIFIED"`: Default value is to not install any GPU driver.
- `"INSTALLATION_DISABLED"`: Disable GPU driver auto installation and needs manual installation.
- `"DEFAULT"`: "Default" GPU driver in COS and Ubuntu.
- `"LATEST"`: "Latest" GPU driver in COS.
*/
  GpuDriverVersion?: string;
}
