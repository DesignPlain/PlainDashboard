import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResolverQueryLogConfigAssociationArgs {
  // The ID of the Route 53 Resolver query logging configuration that you want to associate a VPC with.
  resolverQueryLogConfigId?: string;

  // The ID of a VPC that you want this query logging configuration to log queries for.
  resourceId?: string;
}
export class ResolverQueryLogConfigAssociation extends DS_Resource {
  // The ID of the Route 53 Resolver query logging configuration that you want to associate a VPC with.
  public resolverQueryLogConfigId?: string;

  // The ID of a VPC that you want this query logging configuration to log queries for.
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'resolverQueryLogConfigId',
        'The ID of the Route 53 Resolver query logging configuration that you want to associate a VPC with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceId',
        'The ID of a VPC that you want this query logging configuration to log queries for.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
