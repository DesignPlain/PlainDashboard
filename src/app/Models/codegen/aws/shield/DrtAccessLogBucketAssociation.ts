import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  shield_DrtAccessLogBucketAssociationTimeouts,
  shield_DrtAccessLogBucketAssociationTimeouts_GetTypes,
} from '../types/shield_DrtAccessLogBucketAssociationTimeouts';

export interface DrtAccessLogBucketAssociationArgs {
  // The Amazon S3 bucket that contains the logs that you want to share.
  logBucket?: string;

  // The ID of the Role Arn association used for allowing Shield DRT Access.
  roleArnAssociationId?: string;

  //
  timeouts?: shield_DrtAccessLogBucketAssociationTimeouts;
}
export class DrtAccessLogBucketAssociation extends DS_Resource {
  // The Amazon S3 bucket that contains the logs that you want to share.
  public logBucket?: string;

  // The ID of the Role Arn association used for allowing Shield DRT Access.
  public roleArnAssociationId?: string;

  //
  public timeouts?: shield_DrtAccessLogBucketAssociationTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'logBucket',
        'The Amazon S3 bucket that contains the logs that you want to share.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArnAssociationId',
        'The ID of the Role Arn association used for allowing Shield DRT Access.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => shield_DrtAccessLogBucketAssociationTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
