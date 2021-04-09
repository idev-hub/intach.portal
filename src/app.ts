import * as dotenv from 'dotenv';

dotenv.config()

import "reflect-metadata";
import ApplicationConfig from "./www/common/application.config";

new ApplicationConfig().listen()