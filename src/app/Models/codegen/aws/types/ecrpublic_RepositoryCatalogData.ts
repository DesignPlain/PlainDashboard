import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecrpublic_RepositoryCatalogData {
  // The base64-encoded repository logo payload. (Only visible for verified accounts) Note that drift detection is disabled for this attribute.
  logoImageBlob?: string;

  // The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems will appear as badges on the repository and are used as search filters: `Linux`, `Windows`
  operatingSystems?: Array<string>;

  // Detailed information on how to use the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format.
  usageText?: string;

  // A detailed description of the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format.
  aboutText?: string;

  // The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures will appear as badges on the repository and are used as search filters: `ARM`, `ARM 64`, `x86`, `x86-64`
  architectures?: Array<string>;

  // A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery.
  description?: string;
}

export function ecrpublic_RepositoryCatalogData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'architectures',
      'The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures will appear as badges on the repository and are used as search filters: `ARM`, `ARM 64`, `x86`, `x86-64`',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logoImageBlob',
      'The base64-encoded repository logo payload. (Only visible for verified accounts) Note that drift detection is disabled for this attribute.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'operatingSystems',
      'The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems will appear as badges on the repository and are used as search filters: `Linux`, `Windows`',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'usageText',
      'Detailed information on how to use the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'aboutText',
      'A detailed description of the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format.',
      () => [],
      false,
      false,
    ),
  ];
}
