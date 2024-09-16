import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudsearch_DomainIndexField,
  cloudsearch_DomainIndexField_GetTypes,
} from '../types/cloudsearch_DomainIndexField';
import {
  cloudsearch_DomainScalingParameters,
  cloudsearch_DomainScalingParameters_GetTypes,
} from '../types/cloudsearch_DomainScalingParameters';
import {
  cloudsearch_DomainEndpointOptions,
  cloudsearch_DomainEndpointOptions_GetTypes,
} from '../types/cloudsearch_DomainEndpointOptions';

export interface DomainArgs {
  // Whether or not to maintain extra instances for the domain in a second Availability Zone to ensure high availability.
  multiAz?: boolean;

  // The name of the CloudSearch domain.
  name?: string;

  // Domain scaling parameters. Documented below.
  scalingParameters?: cloudsearch_DomainScalingParameters;

  // Domain endpoint options. Documented below.
  endpointOptions?: cloudsearch_DomainEndpointOptions;

  // The index fields for documents added to the domain. Documented below.
  indexFields?: Array<cloudsearch_DomainIndexField>;
}
export class Domain extends DS_Resource {
  // Whether or not to maintain extra instances for the domain in a second Availability Zone to ensure high availability.
  public multiAz?: boolean;

  // The name of the CloudSearch domain.
  public name?: string;

  // The service endpoint for requesting search results from a search domain.
  public searchServiceEndpoint?: string;

  // The service endpoint for updating documents in a search domain.
  public documentServiceEndpoint?: string;

  // The index fields for documents added to the domain. Documented below.
  public indexFields?: Array<cloudsearch_DomainIndexField>;

  // Domain endpoint options. Documented below.
  public endpointOptions?: cloudsearch_DomainEndpointOptions;

  // Domain scaling parameters. Documented below.
  public scalingParameters?: cloudsearch_DomainScalingParameters;

  // The domain's ARN.
  public arn?: string;

  // An internally generated unique identifier for the domain.
  public domainId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'indexFields',
        'The index fields for documents added to the domain. Documented below.',
        () => cloudsearch_DomainIndexField_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'multiAz',
        'Whether or not to maintain extra instances for the domain in a second Availability Zone to ensure high availability.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the CloudSearch domain.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'scalingParameters',
        'Domain scaling parameters. Documented below.',
        () => cloudsearch_DomainScalingParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'endpointOptions',
        'Domain endpoint options. Documented below.',
        () => cloudsearch_DomainEndpointOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
