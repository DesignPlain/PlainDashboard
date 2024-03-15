export interface AwsClusterControlPlaneRootVolume {
  // Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.
  Throughput?: number;

  // Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3
  VolumeType?: string;

  // Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.
  Iops?: number;

  // Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.
  KmsKeyArn?: string;

  // Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  SizeGib?: number;
}
