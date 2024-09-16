import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration,
  fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration_GetTypes,
} from '../types/fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration';
import {
  fsx_OntapStorageVirtualMachineEndpoint,
  fsx_OntapStorageVirtualMachineEndpoint_GetTypes,
} from '../types/fsx_OntapStorageVirtualMachineEndpoint';

export interface OntapStorageVirtualMachineArgs {
  // Specifies the root volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`. All volumes created under this SVM will inherit the root security style unless the security style is specified on the volume. Default value is `UNIX`.
  rootVolumeSecurityStyle?: string;

  // Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM.
  svmAdminPassword?: string;

  // A map of tags to assign to the storage virtual machine. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block that Amazon FSx uses to join the FSx ONTAP Storage Virtual Machine(SVM) to your Microsoft Active Directory (AD) directory. Detailed below.
  activeDirectoryConfiguration?: fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration;

  // The ID of the Amazon FSx ONTAP File System that this SVM will be created on.
  fileSystemId?: string;

  // The name of the SVM. You can use a maximum of 47 alphanumeric characters, plus the underscore (_) special character.
  name?: string;
}
export class OntapStorageVirtualMachine extends DS_Resource {
  // A map of tags to assign to the storage virtual machine. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the Amazon FSx ONTAP File System that this SVM will be created on.
  public fileSystemId?: string;

  // The name of the SVM. You can use a maximum of 47 alphanumeric characters, plus the underscore (_) special character.
  public name?: string;

  // Specifies the root volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`. All volumes created under this SVM will inherit the root security style unless the security style is specified on the volume. Default value is `UNIX`.
  public rootVolumeSecurityStyle?: string;

  // Describes the SVM's subtype, e.g. `DEFAULT`
  public subtype?: string;

  // Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM.
  public svmAdminPassword?: string;

  // Configuration block that Amazon FSx uses to join the FSx ONTAP Storage Virtual Machine(SVM) to your Microsoft Active Directory (AD) directory. Detailed below.
  public activeDirectoryConfiguration?: fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration;

  // Amazon Resource Name of the storage virtual machine.
  public arn?: string;

  // The endpoints that are used to access data or to manage the storage virtual machine using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. See Endpoints below.
  public endpoints?: Array<fsx_OntapStorageVirtualMachineEndpoint>;

  // The SVM's UUID (universally unique identifier).
  public uuid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'rootVolumeSecurityStyle',
        'Specifies the root volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`. All volumes created under this SVM will inherit the root security style unless the security style is specified on the volume. Default value is `UNIX`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'svmAdminPassword',
        "Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the storage virtual machine. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'activeDirectoryConfiguration',
        'Configuration block that Amazon FSx uses to join the FSx ONTAP Storage Virtual Machine(SVM) to your Microsoft Active Directory (AD) directory. Detailed below.',
        () =>
          fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'fileSystemId',
        'The ID of the Amazon FSx ONTAP File System that this SVM will be created on.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the SVM. You can use a maximum of 47 alphanumeric characters, plus the underscore (_) special character.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
