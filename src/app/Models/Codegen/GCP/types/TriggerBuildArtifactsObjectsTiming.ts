export interface TriggerBuildArtifactsObjectsTiming {
  /*
End of time span.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  EndTime?: string;

  /*
Start of time span.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  StartTime?: string;
}
