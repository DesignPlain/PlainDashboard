import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_FeatureSpecMulticlusteringress,
  gkehub_FeatureSpecMulticlusteringress_GetTypes,
} from './gkehub_FeatureSpecMulticlusteringress';
import {
  gkehub_FeatureSpecClusterupgrade,
  gkehub_FeatureSpecClusterupgrade_GetTypes,
} from './gkehub_FeatureSpecClusterupgrade';
import {
  gkehub_FeatureSpecFleetobservability,
  gkehub_FeatureSpecFleetobservability_GetTypes,
} from './gkehub_FeatureSpecFleetobservability';

export interface gkehub_FeatureSpec {
  /*
Multicluster Ingress-specific spec.
Structure is documented below.
*/
  multiclusteringress?: gkehub_FeatureSpecMulticlusteringress;

  /*
Clusterupgrade feature spec.
Structure is documented below.
*/
  clusterupgrade?: gkehub_FeatureSpecClusterupgrade;

  /*
Fleet Observability feature spec.
Structure is documented below.
*/
  fleetobservability?: gkehub_FeatureSpecFleetobservability;
}

export function gkehub_FeatureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'multiclusteringress',
      'Multicluster Ingress-specific spec.\nStructure is documented below.',
      () => gkehub_FeatureSpecMulticlusteringress_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'clusterupgrade',
      'Clusterupgrade feature spec.\nStructure is documented below.',
      () => gkehub_FeatureSpecClusterupgrade_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fleetobservability',
      'Fleet Observability feature spec.\nStructure is documented below.',
      () => gkehub_FeatureSpecFleetobservability_GetTypes(),
      false,
      false,
    ),
  ];
}
