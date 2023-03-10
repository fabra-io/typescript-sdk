import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class RedshiftConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "database_name" })
  databaseName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "host" })
  host: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "port" })
  port: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}