import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  signer_SigningJobDestinationS3,
  signer_SigningJobDestinationS3_GetTypes,
} from './signer_SigningJobDestinationS3';

export interface signer_SigningJobDestination {
  // A configuration block describing the S3 Destination object: See S3 Destination below for details.
  s3?: signer_SigningJobDestinationS3;
}

export function signer_SigningJobDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3',
      'A configuration block describing the S3 Destination object: See S3 Destination below for details.',
      () => signer_SigningJobDestinationS3_GetTypes(),
      true,
      true,
    ),
  ];
}
