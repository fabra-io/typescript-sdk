/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Successfully created object
 */
export class CreateObject200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  @Type(() => shared.ObjectT)
  object?: shared.ObjectT;
}

export class CreateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successfully created object
   */
  @SpeakeasyMetadata()
  createObject200ApplicationJSONObject?: CreateObject200ApplicationJSON;
}
