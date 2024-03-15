export interface JobPigConfigLoggingConfig {
  // Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  DriverLogLevels?: Map<string, string>;
}
