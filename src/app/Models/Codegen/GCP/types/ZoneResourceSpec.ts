export interface ZoneResourceSpec {
  /*
Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

- - -
*/
  LocationType?: string;
}
