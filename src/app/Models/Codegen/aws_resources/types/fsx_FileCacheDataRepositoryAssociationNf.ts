import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_FileCacheDataRepositoryAssociationNf {
  // A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.
  dnsIps?: Array<string>;

  // The version of the NFS (Network File System) protocol of the NFS data repository. The only supported value is NFS3, which indicates that the data repository must support the NFSv3 protocol. The only supported value is `NFS3`.
  version?: string;
}

export function fsx_FileCacheDataRepositoryAssociationNf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The version of the NFS (Network File System) protocol of the NFS data repository. The only supported value is NFS3, which indicates that the data repository must support the NFSv3 protocol. The only supported value is `NFS3`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsIps",
      "A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
