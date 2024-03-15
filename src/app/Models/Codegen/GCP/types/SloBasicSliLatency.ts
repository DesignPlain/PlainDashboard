export interface SloBasicSliLatency {
  /*
A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
*/
  Threshold?: string;
}
