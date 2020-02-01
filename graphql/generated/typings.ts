import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  uuid: any,
  timestamptz: any,
  Date: any,
  ObjectID: any,
};

export type Address = {
   __typename?: 'Address',
  address?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type Capsule = {
   __typename?: 'Capsule',
  id?: Maybe<Scalars['ID']>,
  landings?: Maybe<Scalars['Int']>,
  missions?: Maybe<Array<Maybe<CapsuleMission>>>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  dragon?: Maybe<Dragon>,
};

export type CapsuleMission = {
   __typename?: 'CapsuleMission',
  flight?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type CapsulesFind = {
  id?: Maybe<Scalars['ID']>,
  landings?: Maybe<Scalars['Int']>,
  mission?: Maybe<Scalars['String']>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export enum Conflict_Action {
  Ignore = 'ignore',
  Update = 'update'
}

export type Core = {
   __typename?: 'Core',
  asds_attempts?: Maybe<Scalars['Int']>,
  asds_landings?: Maybe<Scalars['Int']>,
  block?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  missions?: Maybe<Array<Maybe<CapsuleMission>>>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  rtls_attempts?: Maybe<Scalars['Int']>,
  rtls_landings?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  water_landing?: Maybe<Scalars['Boolean']>,
};

export type CoreMission = {
   __typename?: 'CoreMission',
  name?: Maybe<Scalars['String']>,
  flight?: Maybe<Scalars['Int']>,
};

export type CoresFind = {
  asds_attempts?: Maybe<Scalars['Int']>,
  asds_landings?: Maybe<Scalars['Int']>,
  block?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  missions?: Maybe<Scalars['String']>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  rtls_attempts?: Maybe<Scalars['Int']>,
  rtls_landings?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  water_landing?: Maybe<Scalars['Boolean']>,
};


export type Distance = {
   __typename?: 'Distance',
  feet?: Maybe<Scalars['Float']>,
  meters?: Maybe<Scalars['Float']>,
};

export type Dragon = {
   __typename?: 'Dragon',
  active?: Maybe<Scalars['Boolean']>,
  crew_capacity?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  diameter?: Maybe<Distance>,
  dry_mass_kg?: Maybe<Scalars['Int']>,
  dry_mass_lb?: Maybe<Scalars['Int']>,
  first_flight?: Maybe<Scalars['String']>,
  heat_shield?: Maybe<DragonHeatShield>,
  height_w_trunk?: Maybe<Distance>,
  id?: Maybe<Scalars['ID']>,
  launch_payload_mass?: Maybe<Mass>,
  launch_payload_vol?: Maybe<Volume>,
  name?: Maybe<Scalars['String']>,
  orbit_duration_yr?: Maybe<Scalars['Int']>,
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>,
  return_payload_mass?: Maybe<Mass>,
  return_payload_vol?: Maybe<Volume>,
  sidewall_angle_deg?: Maybe<Scalars['Float']>,
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>,
  trunk?: Maybe<DragonTrunk>,
  type?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type DragonHeatShield = {
   __typename?: 'DragonHeatShield',
  dev_partner?: Maybe<Scalars['String']>,
  material?: Maybe<Scalars['String']>,
  size_meters?: Maybe<Scalars['Float']>,
  temp_degrees?: Maybe<Scalars['Int']>,
};

export type DragonPressurizedCapsule = {
   __typename?: 'DragonPressurizedCapsule',
  payload_volume?: Maybe<Volume>,
};

export type DragonThrust = {
   __typename?: 'DragonThrust',
  amount?: Maybe<Scalars['Int']>,
  fuel_1?: Maybe<Scalars['String']>,
  fuel_2?: Maybe<Scalars['String']>,
  pods?: Maybe<Scalars['Int']>,
  thrust?: Maybe<Force>,
  type?: Maybe<Scalars['String']>,
};

export type DragonTrunk = {
   __typename?: 'DragonTrunk',
  cargo?: Maybe<DragonTrunkCargo>,
  trunk_volume?: Maybe<Volume>,
};

export type DragonTrunkCargo = {
   __typename?: 'DragonTrunkCargo',
  solar_array?: Maybe<Scalars['Int']>,
  unpressurized_cargo?: Maybe<Scalars['Boolean']>,
};

export type Force = {
   __typename?: 'Force',
  kN?: Maybe<Scalars['Float']>,
  lbf?: Maybe<Scalars['Float']>,
};

export type HistoriesResult = {
   __typename?: 'HistoriesResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<History>>>,
};

export type History = {
   __typename?: 'History',
  details?: Maybe<Scalars['String']>,
  event_date_unix?: Maybe<Scalars['Date']>,
  event_date_utc?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  links?: Maybe<Link>,
  title?: Maybe<Scalars['String']>,
  flight?: Maybe<Launch>,
};

export type HistoryFind = {
  end?: Maybe<Scalars['Date']>,
  flight_number?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  start?: Maybe<Scalars['Date']>,
};

export type Info = {
   __typename?: 'Info',
  ceo?: Maybe<Scalars['String']>,
  coo?: Maybe<Scalars['String']>,
  cto_propulsion?: Maybe<Scalars['String']>,
  cto?: Maybe<Scalars['String']>,
  employees?: Maybe<Scalars['Int']>,
  founded?: Maybe<Scalars['Int']>,
  founder?: Maybe<Scalars['String']>,
  headquarters?: Maybe<Address>,
  launch_sites?: Maybe<Scalars['Int']>,
  links?: Maybe<InfoLinks>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  test_sites?: Maybe<Scalars['Int']>,
  valuation?: Maybe<Scalars['Float']>,
  vehicles?: Maybe<Scalars['Int']>,
};

export type InfoLinks = {
   __typename?: 'InfoLinks',
  elon_twitter?: Maybe<Scalars['String']>,
  flickr?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};

export type Landpad = {
   __typename?: 'Landpad',
  attempted_landings?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  full_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  landing_type?: Maybe<Scalars['String']>,
  location?: Maybe<Location>,
  status?: Maybe<Scalars['String']>,
  successful_landings?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Launch = {
   __typename?: 'Launch',
  details?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  is_tentative?: Maybe<Scalars['Boolean']>,
  launch_date_local?: Maybe<Scalars['Date']>,
  launch_date_unix?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_site?: Maybe<LaunchSite>,
  launch_success?: Maybe<Scalars['Boolean']>,
  launch_year?: Maybe<Scalars['String']>,
  links?: Maybe<LaunchLinks>,
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  mission_name?: Maybe<Scalars['String']>,
  rocket?: Maybe<LaunchRocket>,
  static_fire_date_unix?: Maybe<Scalars['Date']>,
  static_fire_date_utc?: Maybe<Scalars['Date']>,
  telemetry?: Maybe<LaunchTelemetry>,
  tentative_max_precision?: Maybe<Scalars['String']>,
  upcoming?: Maybe<Scalars['Boolean']>,
  ships?: Maybe<Array<Maybe<Ship>>>,
};

export type LaunchesPastResult = {
   __typename?: 'LaunchesPastResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Launch>>>,
};

export type LaunchFind = {
  apoapsis_km?: Maybe<Scalars['Float']>,
  block?: Maybe<Scalars['Int']>,
  cap_serial?: Maybe<Scalars['String']>,
  capsule_reuse?: Maybe<Scalars['String']>,
  core_flight?: Maybe<Scalars['Int']>,
  core_reuse?: Maybe<Scalars['String']>,
  core_serial?: Maybe<Scalars['String']>,
  customer?: Maybe<Scalars['String']>,
  eccentricity?: Maybe<Scalars['Float']>,
  end?: Maybe<Scalars['Date']>,
  epoch?: Maybe<Scalars['Date']>,
  fairings_recovered?: Maybe<Scalars['String']>,
  fairings_recovery_attempt?: Maybe<Scalars['String']>,
  fairings_reuse?: Maybe<Scalars['String']>,
  fairings_reused?: Maybe<Scalars['String']>,
  fairings_ship?: Maybe<Scalars['String']>,
  gridfins?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  land_success?: Maybe<Scalars['String']>,
  landing_intent?: Maybe<Scalars['String']>,
  landing_type?: Maybe<Scalars['String']>,
  landing_vehicle?: Maybe<Scalars['String']>,
  launch_date_local?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_success?: Maybe<Scalars['String']>,
  launch_year?: Maybe<Scalars['String']>,
  legs?: Maybe<Scalars['String']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Scalars['String']>,
  mean_motion?: Maybe<Scalars['Float']>,
  mission_id?: Maybe<Scalars['String']>,
  mission_name?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['String']>,
  payload_type?: Maybe<Scalars['String']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['String']>,
  rocket_id?: Maybe<Scalars['String']>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
  second_stage_block?: Maybe<Scalars['String']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
  ship?: Maybe<Scalars['String']>,
  side_core1_reuse?: Maybe<Scalars['String']>,
  side_core2_reuse?: Maybe<Scalars['String']>,
  site_id?: Maybe<Scalars['String']>,
  site_name_long?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Date']>,
  tbd?: Maybe<Scalars['String']>,
  tentative_max_precision?: Maybe<Scalars['String']>,
  tentative?: Maybe<Scalars['String']>,
};

export type LaunchLinks = {
   __typename?: 'LaunchLinks',
  article_link?: Maybe<Scalars['String']>,
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>,
  mission_patch_small?: Maybe<Scalars['String']>,
  mission_patch?: Maybe<Scalars['String']>,
  presskit?: Maybe<Scalars['String']>,
  reddit_campaign?: Maybe<Scalars['String']>,
  reddit_launch?: Maybe<Scalars['String']>,
  reddit_media?: Maybe<Scalars['String']>,
  reddit_recovery?: Maybe<Scalars['String']>,
  video_link?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Launchpad = {
   __typename?: 'Launchpad',
  attempted_launches?: Maybe<Scalars['Int']>,
  details?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  location?: Maybe<Location>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  successful_launches?: Maybe<Scalars['Int']>,
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type LaunchRocket = {
   __typename?: 'LaunchRocket',
  fairings?: Maybe<LaunchRocketFairings>,
  first_stage?: Maybe<LaunchRocketFirstStage>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
  rocket?: Maybe<Rocket>,
  second_stage?: Maybe<LaunchRocketSecondStage>,
};

export type LaunchRocketFairings = {
   __typename?: 'LaunchRocketFairings',
  recovered?: Maybe<Scalars['Boolean']>,
  recovery_attempt?: Maybe<Scalars['Boolean']>,
  reused?: Maybe<Scalars['Boolean']>,
  ship?: Maybe<Scalars['String']>,
};

export type LaunchRocketFirstStage = {
   __typename?: 'LaunchRocketFirstStage',
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>,
};

export type LaunchRocketFirstStageCore = {
   __typename?: 'LaunchRocketFirstStageCore',
  block?: Maybe<Scalars['Int']>,
  core?: Maybe<Core>,
  flight?: Maybe<Scalars['Int']>,
  gridfins?: Maybe<Scalars['Boolean']>,
  land_success?: Maybe<Scalars['Boolean']>,
  landing_intent?: Maybe<Scalars['Boolean']>,
  landing_type?: Maybe<Scalars['String']>,
  landing_vehicle?: Maybe<Scalars['String']>,
  legs?: Maybe<Scalars['Boolean']>,
  reused?: Maybe<Scalars['Boolean']>,
};

export type LaunchRocketSecondStage = {
   __typename?: 'LaunchRocketSecondStage',
  block?: Maybe<Scalars['Int']>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
};

export type LaunchSite = {
   __typename?: 'LaunchSite',
  site_id?: Maybe<Scalars['String']>,
  site_name_long?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
};

export type LaunchTelemetry = {
   __typename?: 'LaunchTelemetry',
  flight_club?: Maybe<Scalars['String']>,
};

export type Link = {
   __typename?: 'Link',
  article?: Maybe<Scalars['String']>,
  reddit?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Location = {
   __typename?: 'Location',
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
};

export type Mass = {
   __typename?: 'Mass',
  kg?: Maybe<Scalars['Int']>,
  lb?: Maybe<Scalars['Int']>,
};

export type Mission = {
   __typename?: 'Mission',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
};

export type MissionResult = {
   __typename?: 'MissionResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Mission>>>,
};

export type MissionsFind = {
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  delete_users?: Maybe<Users_Mutation_Response>,
  insert_users?: Maybe<Users_Mutation_Response>,
  update_users?: Maybe<Users_Mutation_Response>,
};


export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp
};


export type MutationInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>
};


export type MutationUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
};


export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Payload = {
   __typename?: 'Payload',
  customers?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orbit_params?: Maybe<PayloadOrbitParams>,
  orbit?: Maybe<Scalars['String']>,
  payload_mass_kg?: Maybe<Scalars['Float']>,
  payload_mass_lbs?: Maybe<Scalars['Float']>,
  payload_type?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['Boolean']>,
};

export type PayloadOrbitParams = {
   __typename?: 'PayloadOrbitParams',
  apoapsis_km?: Maybe<Scalars['Float']>,
  arg_of_pericenter?: Maybe<Scalars['Float']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch?: Maybe<Scalars['Date']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  mean_anomaly?: Maybe<Scalars['Float']>,
  mean_motion?: Maybe<Scalars['Float']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
};

export type PayloadsFind = {
  apoapsis_km?: Maybe<Scalars['Float']>,
  customer?: Maybe<Scalars['String']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch?: Maybe<Scalars['Date']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Scalars['String']>,
  mean_motion?: Maybe<Scalars['Float']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['ID']>,
  payload_type?: Maybe<Scalars['String']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['Boolean']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
};

export type Query = {
   __typename?: 'Query',
  users: Array<Users>,
  users_aggregate: Users_Aggregate,
  users_by_pk?: Maybe<Users>,
  capsules?: Maybe<Array<Maybe<Capsule>>>,
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>,
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>,
  capsule?: Maybe<Capsule>,
  company?: Maybe<Info>,
  cores?: Maybe<Array<Maybe<Core>>>,
  coresPast?: Maybe<Array<Maybe<Core>>>,
  coresUpcoming?: Maybe<Array<Maybe<Core>>>,
  core?: Maybe<Core>,
  dragons?: Maybe<Array<Maybe<Dragon>>>,
  dragon?: Maybe<Dragon>,
  histories?: Maybe<Array<Maybe<History>>>,
  historiesResult?: Maybe<HistoriesResult>,
  history?: Maybe<History>,
  landpads?: Maybe<Array<Maybe<Landpad>>>,
  landpad?: Maybe<Landpad>,
  launches?: Maybe<Array<Maybe<Launch>>>,
  launchesPast?: Maybe<Array<Maybe<Launch>>>,
  launchesPastResult?: Maybe<LaunchesPastResult>,
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>,
  launch?: Maybe<Launch>,
  launchLatest?: Maybe<Launch>,
  launchNext?: Maybe<Launch>,
  launchpads?: Maybe<Array<Maybe<Launchpad>>>,
  launchpad?: Maybe<Launchpad>,
  missions?: Maybe<Array<Maybe<Mission>>>,
  missionsResult?: Maybe<MissionResult>,
  mission?: Maybe<Mission>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
  payload?: Maybe<Payload>,
  roadster?: Maybe<Roadster>,
  rockets?: Maybe<Array<Maybe<Rocket>>>,
  rocketsResult?: Maybe<RocketsResult>,
  rocket?: Maybe<Rocket>,
  ships?: Maybe<Array<Maybe<Ship>>>,
  shipsResult?: Maybe<ShipsResult>,
  ship?: Maybe<Ship>,
};


export type QueryUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type QueryUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid']
};


export type QueryCapsulesArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCapsulesPastArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCapsulesUpcomingArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCapsuleArgs = {
  id: Scalars['ID']
};


export type QueryCoresArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoresPastArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoresUpcomingArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoreArgs = {
  id: Scalars['ID']
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryDragonArgs = {
  id: Scalars['ID']
};


export type QueryHistoriesArgs = {
  find?: Maybe<HistoryFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryHistoriesResultArgs = {
  find?: Maybe<HistoryFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryHistoryArgs = {
  id: Scalars['ID']
};


export type QueryLandpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLandpadArgs = {
  id: Scalars['ID']
};


export type QueryLaunchesArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesPastArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesPastResultArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesUpcomingArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchArgs = {
  id: Scalars['ID']
};


export type QueryLaunchLatestArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchNextArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID']
};


export type QueryMissionsArgs = {
  find?: Maybe<MissionsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryMissionsResultArgs = {
  find?: Maybe<MissionsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryMissionArgs = {
  id: Scalars['ID']
};


export type QueryPayloadsArgs = {
  find?: Maybe<PayloadsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryPayloadArgs = {
  id: Scalars['ID']
};


export type QueryRocketsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryRocketsResultArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryRocketArgs = {
  id: Scalars['ID']
};


export type QueryShipsArgs = {
  find?: Maybe<ShipsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryShipsResultArgs = {
  find?: Maybe<ShipsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryShipArgs = {
  id: Scalars['ID']
};

export type Result = {
   __typename?: 'Result',
  totalCount?: Maybe<Scalars['Int']>,
};

export type Roadster = {
   __typename?: 'Roadster',
  apoapsis_au?: Maybe<Scalars['Float']>,
  details?: Maybe<Scalars['String']>,
  earth_distance_km?: Maybe<Scalars['Float']>,
  earth_distance_mi?: Maybe<Scalars['Float']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch_jd?: Maybe<Scalars['Float']>,
  inclination?: Maybe<Scalars['Float']>,
  launch_date_unix?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_mass_kg?: Maybe<Scalars['Int']>,
  launch_mass_lbs?: Maybe<Scalars['Int']>,
  longitude?: Maybe<Scalars['Float']>,
  mars_distance_km?: Maybe<Scalars['Float']>,
  mars_distance_mi?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit_type?: Maybe<Scalars['Float']>,
  periapsis_arg?: Maybe<Scalars['Float']>,
  periapsis_au?: Maybe<Scalars['Float']>,
  period_days?: Maybe<Scalars['Float']>,
  semi_major_axis_au?: Maybe<Scalars['Float']>,
  speed_kph?: Maybe<Scalars['Float']>,
  speed_mph?: Maybe<Scalars['Float']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Rocket = {
   __typename?: 'Rocket',
  active?: Maybe<Scalars['Boolean']>,
  boosters?: Maybe<Scalars['Int']>,
  company?: Maybe<Scalars['String']>,
  cost_per_launch?: Maybe<Scalars['Int']>,
  country?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  diameter?: Maybe<Distance>,
  engines?: Maybe<RocketEngines>,
  first_flight?: Maybe<Scalars['Date']>,
  first_stage?: Maybe<RocketFirstStage>,
  height?: Maybe<Distance>,
  id?: Maybe<Scalars['ID']>,
  landing_legs?: Maybe<RocketLandingLegs>,
  mass?: Maybe<Mass>,
  name?: Maybe<Scalars['String']>,
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>,
  second_stage?: Maybe<RocketSecondStage>,
  stages?: Maybe<Scalars['Int']>,
  success_rate_pct?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type RocketEngines = {
   __typename?: 'RocketEngines',
  number?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  layout?: Maybe<Scalars['String']>,
  engine_loss_max?: Maybe<Scalars['String']>,
  propellant_1?: Maybe<Scalars['String']>,
  propellant_2?: Maybe<Scalars['String']>,
  thrust_sea_level?: Maybe<Force>,
  thrust_vacuum?: Maybe<Force>,
  thrust_to_weight?: Maybe<Scalars['Float']>,
};

export type RocketFirstStage = {
   __typename?: 'RocketFirstStage',
  burn_time_sec?: Maybe<Scalars['Int']>,
  engines?: Maybe<Scalars['Int']>,
  fuel_amount_tons?: Maybe<Scalars['Float']>,
  reusable?: Maybe<Scalars['Boolean']>,
  thrust_sea_level?: Maybe<Force>,
  thrust_vacuum?: Maybe<Force>,
};

export type RocketLandingLegs = {
   __typename?: 'RocketLandingLegs',
  number?: Maybe<Scalars['Int']>,
  material?: Maybe<Scalars['String']>,
};

export type RocketPayloadWeight = {
   __typename?: 'RocketPayloadWeight',
  id?: Maybe<Scalars['String']>,
  kg?: Maybe<Scalars['Int']>,
  lb?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type RocketSecondStage = {
   __typename?: 'RocketSecondStage',
  burn_time_sec?: Maybe<Scalars['Int']>,
  engines?: Maybe<Scalars['Int']>,
  fuel_amount_tons?: Maybe<Scalars['Float']>,
  payloads?: Maybe<RocketSecondStagePayloads>,
  thrust?: Maybe<Force>,
};

export type RocketSecondStagePayloadCompositeFairing = {
   __typename?: 'RocketSecondStagePayloadCompositeFairing',
  height?: Maybe<Distance>,
  diameter?: Maybe<Distance>,
};

export type RocketSecondStagePayloads = {
   __typename?: 'RocketSecondStagePayloads',
  option_1?: Maybe<Scalars['String']>,
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>,
};

export type RocketsResult = {
   __typename?: 'RocketsResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Rocket>>>,
};

export type Ship = {
   __typename?: 'Ship',
  abs?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  attempted_landings?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['Int']>,
  course_deg?: Maybe<Scalars['Int']>,
  home_port?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  imo?: Maybe<Scalars['Int']>,
  missions?: Maybe<Array<Maybe<ShipMission>>>,
  mmsi?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  position?: Maybe<ShipLocation>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  speed_kn?: Maybe<Scalars['Float']>,
  status?: Maybe<Scalars['String']>,
  successful_landings?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  weight_kg?: Maybe<Scalars['Int']>,
  weight_lbs?: Maybe<Scalars['Int']>,
  year_built?: Maybe<Scalars['Int']>,
};

export type ShipLocation = {
   __typename?: 'ShipLocation',
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type ShipMission = {
   __typename?: 'ShipMission',
  flight?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ShipsFind = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
  imo?: Maybe<Scalars['Int']>,
  mmsi?: Maybe<Scalars['Int']>,
  abs?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['Int']>,
  weight_lbs?: Maybe<Scalars['Int']>,
  weight_kg?: Maybe<Scalars['Int']>,
  year_built?: Maybe<Scalars['Int']>,
  home_port?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  speed_kn?: Maybe<Scalars['Int']>,
  course_deg?: Maybe<Scalars['Int']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  successful_landings?: Maybe<Scalars['Int']>,
  attempted_landings?: Maybe<Scalars['Int']>,
  mission?: Maybe<Scalars['String']>,
};

export type ShipsResult = {
   __typename?: 'ShipsResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Ship>>>,
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  users: Array<Users>,
  users_aggregate: Users_Aggregate,
  users_by_pk?: Maybe<Users>,
};


export type SubscriptionUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid']
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

export type Users = {
   __typename?: 'users',
  id: Scalars['uuid'],
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp: Scalars['timestamptz'],
  twitter?: Maybe<Scalars['String']>,
};

export type Users_Aggregate = {
   __typename?: 'users_aggregate',
  aggregate?: Maybe<Users_Aggregate_Fields>,
  nodes: Array<Users>,
};

export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Users_Max_Fields>,
  min?: Maybe<Users_Min_Fields>,
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Users_Max_Order_By>,
  min?: Maybe<Users_Min_Order_By>,
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>,
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  rocket?: Maybe<String_Comparison_Exp>,
  timestamp?: Maybe<Timestamptz_Comparison_Exp>,
  twitter?: Maybe<String_Comparison_Exp>,
};

export enum Users_Constraint {
  UsersPkey = 'users_pkey'
}

export type Users_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

export type Users_Max_Fields = {
   __typename?: 'users_max_fields',
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

export type Users_Max_Order_By = {
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

export type Users_Min_Fields = {
   __typename?: 'users_min_fields',
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

export type Users_Min_Order_By = {
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Users>,
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input,
  on_conflict?: Maybe<Users_On_Conflict>,
};

export type Users_On_Conflict = {
  constraint: Users_Constraint,
  update_columns: Array<Users_Update_Column>,
};

export type Users_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

export enum Users_Select_Column {
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

export type Users_Set_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

export enum Users_Update_Column {
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type Volume = {
   __typename?: 'Volume',
  cubic_feet?: Maybe<Scalars['Int']>,
  cubic_meters?: Maybe<Scalars['Int']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (obj: any, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  users_select_column: Users_Select_Column,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  users_order_by: Users_Order_By,
  order_by: Order_By,
  users_bool_exp: Users_Bool_Exp,
  uuid_comparison_exp: Uuid_Comparison_Exp,
  uuid: ResolverTypeWrapper<Scalars['uuid']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  String_comparison_exp: String_Comparison_Exp,
  String: ResolverTypeWrapper<Scalars['String']>,
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp,
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>,
  users: ResolverTypeWrapper<Users>,
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>,
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>,
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>,
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>,
  CapsulesFind: CapsulesFind,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Capsule: ResolverTypeWrapper<Capsule>,
  CapsuleMission: ResolverTypeWrapper<CapsuleMission>,
  Dragon: ResolverTypeWrapper<Dragon>,
  Distance: ResolverTypeWrapper<Distance>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  DragonHeatShield: ResolverTypeWrapper<DragonHeatShield>,
  Mass: ResolverTypeWrapper<Mass>,
  Volume: ResolverTypeWrapper<Volume>,
  DragonPressurizedCapsule: ResolverTypeWrapper<DragonPressurizedCapsule>,
  DragonThrust: ResolverTypeWrapper<DragonThrust>,
  Force: ResolverTypeWrapper<Force>,
  DragonTrunk: ResolverTypeWrapper<DragonTrunk>,
  DragonTrunkCargo: ResolverTypeWrapper<DragonTrunkCargo>,
  Info: ResolverTypeWrapper<Info>,
  Address: ResolverTypeWrapper<Address>,
  InfoLinks: ResolverTypeWrapper<InfoLinks>,
  CoresFind: CoresFind,
  Core: ResolverTypeWrapper<Core>,
  HistoryFind: HistoryFind,
  History: ResolverTypeWrapper<History>,
  Link: ResolverTypeWrapper<Link>,
  Launch: ResolverTypeWrapper<Launch>,
  LaunchSite: ResolverTypeWrapper<LaunchSite>,
  LaunchLinks: ResolverTypeWrapper<LaunchLinks>,
  LaunchRocket: ResolverTypeWrapper<LaunchRocket>,
  LaunchRocketFairings: ResolverTypeWrapper<LaunchRocketFairings>,
  LaunchRocketFirstStage: ResolverTypeWrapper<LaunchRocketFirstStage>,
  LaunchRocketFirstStageCore: ResolverTypeWrapper<LaunchRocketFirstStageCore>,
  Rocket: ResolverTypeWrapper<Rocket>,
  RocketEngines: ResolverTypeWrapper<RocketEngines>,
  RocketFirstStage: ResolverTypeWrapper<RocketFirstStage>,
  RocketLandingLegs: ResolverTypeWrapper<RocketLandingLegs>,
  RocketPayloadWeight: ResolverTypeWrapper<RocketPayloadWeight>,
  RocketSecondStage: ResolverTypeWrapper<RocketSecondStage>,
  RocketSecondStagePayloads: ResolverTypeWrapper<RocketSecondStagePayloads>,
  RocketSecondStagePayloadCompositeFairing: ResolverTypeWrapper<RocketSecondStagePayloadCompositeFairing>,
  LaunchRocketSecondStage: ResolverTypeWrapper<LaunchRocketSecondStage>,
  Payload: ResolverTypeWrapper<Payload>,
  PayloadOrbitParams: ResolverTypeWrapper<PayloadOrbitParams>,
  LaunchTelemetry: ResolverTypeWrapper<LaunchTelemetry>,
  Ship: ResolverTypeWrapper<Ship>,
  ShipMission: ResolverTypeWrapper<ShipMission>,
  ShipLocation: ResolverTypeWrapper<ShipLocation>,
  HistoriesResult: ResolverTypeWrapper<HistoriesResult>,
  Result: ResolverTypeWrapper<Result>,
  Landpad: ResolverTypeWrapper<Landpad>,
  Location: ResolverTypeWrapper<Location>,
  LaunchFind: LaunchFind,
  LaunchesPastResult: ResolverTypeWrapper<LaunchesPastResult>,
  Launchpad: ResolverTypeWrapper<Launchpad>,
  MissionsFind: MissionsFind,
  Mission: ResolverTypeWrapper<Mission>,
  MissionResult: ResolverTypeWrapper<MissionResult>,
  PayloadsFind: PayloadsFind,
  Roadster: ResolverTypeWrapper<Roadster>,
  RocketsResult: ResolverTypeWrapper<RocketsResult>,
  ShipsFind: ShipsFind,
  ShipsResult: ResolverTypeWrapper<ShipsResult>,
  Mutation: ResolverTypeWrapper<{}>,
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>,
  users_insert_input: Users_Insert_Input,
  users_on_conflict: Users_On_Conflict,
  users_constraint: Users_Constraint,
  users_update_column: Users_Update_Column,
  users_set_input: Users_Set_Input,
  Subscription: ResolverTypeWrapper<{}>,
  conflict_action: Conflict_Action,
  users_aggregate_order_by: Users_Aggregate_Order_By,
  users_max_order_by: Users_Max_Order_By,
  users_min_order_by: Users_Min_Order_By,
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input,
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input,
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>,
  CoreMission: ResolverTypeWrapper<CoreMission>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  users_select_column: Users_Select_Column,
  Int: Scalars['Int'],
  users_order_by: Users_Order_By,
  order_by: Order_By,
  users_bool_exp: Users_Bool_Exp,
  uuid_comparison_exp: Uuid_Comparison_Exp,
  uuid: Scalars['uuid'],
  Boolean: Scalars['Boolean'],
  String_comparison_exp: String_Comparison_Exp,
  String: Scalars['String'],
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp,
  timestamptz: Scalars['timestamptz'],
  users: Users,
  users_aggregate: Users_Aggregate,
  users_aggregate_fields: Users_Aggregate_Fields,
  users_max_fields: Users_Max_Fields,
  users_min_fields: Users_Min_Fields,
  CapsulesFind: CapsulesFind,
  ID: Scalars['ID'],
  Date: Scalars['Date'],
  Capsule: Capsule,
  CapsuleMission: CapsuleMission,
  Dragon: Dragon,
  Distance: Distance,
  Float: Scalars['Float'],
  DragonHeatShield: DragonHeatShield,
  Mass: Mass,
  Volume: Volume,
  DragonPressurizedCapsule: DragonPressurizedCapsule,
  DragonThrust: DragonThrust,
  Force: Force,
  DragonTrunk: DragonTrunk,
  DragonTrunkCargo: DragonTrunkCargo,
  Info: Info,
  Address: Address,
  InfoLinks: InfoLinks,
  CoresFind: CoresFind,
  Core: Core,
  HistoryFind: HistoryFind,
  History: History,
  Link: Link,
  Launch: Launch,
  LaunchSite: LaunchSite,
  LaunchLinks: LaunchLinks,
  LaunchRocket: LaunchRocket,
  LaunchRocketFairings: LaunchRocketFairings,
  LaunchRocketFirstStage: LaunchRocketFirstStage,
  LaunchRocketFirstStageCore: LaunchRocketFirstStageCore,
  Rocket: Rocket,
  RocketEngines: RocketEngines,
  RocketFirstStage: RocketFirstStage,
  RocketLandingLegs: RocketLandingLegs,
  RocketPayloadWeight: RocketPayloadWeight,
  RocketSecondStage: RocketSecondStage,
  RocketSecondStagePayloads: RocketSecondStagePayloads,
  RocketSecondStagePayloadCompositeFairing: RocketSecondStagePayloadCompositeFairing,
  LaunchRocketSecondStage: LaunchRocketSecondStage,
  Payload: Payload,
  PayloadOrbitParams: PayloadOrbitParams,
  LaunchTelemetry: LaunchTelemetry,
  Ship: Ship,
  ShipMission: ShipMission,
  ShipLocation: ShipLocation,
  HistoriesResult: HistoriesResult,
  Result: Result,
  Landpad: Landpad,
  Location: Location,
  LaunchFind: LaunchFind,
  LaunchesPastResult: LaunchesPastResult,
  Launchpad: Launchpad,
  MissionsFind: MissionsFind,
  Mission: Mission,
  MissionResult: MissionResult,
  PayloadsFind: PayloadsFind,
  Roadster: Roadster,
  RocketsResult: RocketsResult,
  ShipsFind: ShipsFind,
  ShipsResult: ShipsResult,
  Mutation: {},
  users_mutation_response: Users_Mutation_Response,
  users_insert_input: Users_Insert_Input,
  users_on_conflict: Users_On_Conflict,
  users_constraint: Users_Constraint,
  users_update_column: Users_Update_Column,
  users_set_input: Users_Set_Input,
  Subscription: {},
  conflict_action: Conflict_Action,
  users_aggregate_order_by: Users_Aggregate_Order_By,
  users_max_order_by: Users_Max_Order_By,
  users_min_order_by: Users_Min_Order_By,
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input,
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input,
  ObjectID: Scalars['ObjectID'],
  CoreMission: CoreMission,
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type CapsuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Capsule'] = ResolversParentTypes['Capsule']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>,
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type CapsuleMissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CapsuleMission'] = ResolversParentTypes['CapsuleMission']> = {
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type CoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Core'] = ResolversParentTypes['Core']> = {
  asds_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  asds_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>,
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  rtls_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  rtls_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  water_landing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type CoreMissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoreMission'] = ResolversParentTypes['CoreMission']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DistanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Distance'] = ResolversParentTypes['Distance']> = {
  feet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dragon'] = ResolversParentTypes['Dragon']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  crew_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  dry_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  dry_mass_lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  first_flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  heat_shield?: Resolver<Maybe<ResolversTypes['DragonHeatShield']>, ParentType, ContextType>,
  height_w_trunk?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  launch_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>,
  launch_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  orbit_duration_yr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  pressurized_capsule?: Resolver<Maybe<ResolversTypes['DragonPressurizedCapsule']>, ParentType, ContextType>,
  return_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>,
  return_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>,
  sidewall_angle_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  thrusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['DragonThrust']>>>, ParentType, ContextType>,
  trunk?: Resolver<Maybe<ResolversTypes['DragonTrunk']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonHeatShieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['DragonHeatShield'] = ResolversParentTypes['DragonHeatShield']> = {
  dev_partner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  size_meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  temp_degrees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonPressurizedCapsuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['DragonPressurizedCapsule'] = ResolversParentTypes['DragonPressurizedCapsule']> = {
  payload_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonThrustResolvers<ContextType = any, ParentType extends ResolversParentTypes['DragonThrust'] = ResolversParentTypes['DragonThrust']> = {
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  fuel_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fuel_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonTrunkResolvers<ContextType = any, ParentType extends ResolversParentTypes['DragonTrunk'] = ResolversParentTypes['DragonTrunk']> = {
  cargo?: Resolver<Maybe<ResolversTypes['DragonTrunkCargo']>, ParentType, ContextType>,
  trunk_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type DragonTrunkCargoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DragonTrunkCargo'] = ResolversParentTypes['DragonTrunkCargo']> = {
  solar_array?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  unpressurized_cargo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ForceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Force'] = ResolversParentTypes['Force']> = {
  kN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lbf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type HistoriesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['HistoriesResult'] = ResolversParentTypes['HistoriesResult']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type HistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = {
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  event_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  event_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  links?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  flight?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = {
  ceo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  coo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  cto_propulsion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  cto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  employees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  founded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  founder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  headquarters?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>,
  launch_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  links?: Resolver<Maybe<ResolversTypes['InfoLinks']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  test_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  valuation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vehicles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type InfoLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['InfoLinks'] = ResolversParentTypes['InfoLinks']> = {
  elon_twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  flickr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LandpadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Landpad'] = ResolversParentTypes['Landpad']> = {
  attempted_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  successful_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = {
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  is_tentative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  launch_date_local?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  launch_site?: Resolver<Maybe<ResolversTypes['LaunchSite']>, ParentType, ContextType>,
  launch_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  launch_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  links?: Resolver<Maybe<ResolversTypes['LaunchLinks']>, ParentType, ContextType>,
  mission_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  mission_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket?: Resolver<Maybe<ResolversTypes['LaunchRocket']>, ParentType, ContextType>,
  static_fire_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  static_fire_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  telemetry?: Resolver<Maybe<ResolversTypes['LaunchTelemetry']>, ParentType, ContextType>,
  tentative_max_precision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  upcoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchesPastResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchesPastResult'] = ResolversParentTypes['LaunchesPastResult']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchLinks'] = ResolversParentTypes['LaunchLinks']> = {
  article_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  flickr_images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  mission_patch_small?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mission_patch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  presskit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reddit_campaign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reddit_launch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reddit_media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reddit_recovery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  video_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchpadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launchpad'] = ResolversParentTypes['Launchpad']> = {
  attempted_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  vehicles_launched?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchRocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchRocket'] = ResolversParentTypes['LaunchRocket']> = {
  fairings?: Resolver<Maybe<ResolversTypes['LaunchRocketFairings']>, ParentType, ContextType>,
  first_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketFirstStage']>, ParentType, ContextType>,
  rocket_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>,
  second_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketSecondStage']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchRocketFairingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchRocketFairings'] = ResolversParentTypes['LaunchRocketFairings']> = {
  recovered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  recovery_attempt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ship?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchRocketFirstStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchRocketFirstStage'] = ResolversParentTypes['LaunchRocketFirstStage']> = {
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaunchRocketFirstStageCore']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchRocketFirstStageCoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchRocketFirstStageCore'] = ResolversParentTypes['LaunchRocketFirstStageCore']> = {
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType>,
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  gridfins?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  land_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  landing_intent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  landing_vehicle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  legs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchRocketSecondStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchRocketSecondStage'] = ResolversParentTypes['LaunchRocketSecondStage']> = {
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchSiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchSite'] = ResolversParentTypes['LaunchSite']> = {
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  site_name_long?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  site_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LaunchTelemetryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchTelemetry'] = ResolversParentTypes['LaunchTelemetry']> = {
  flight_club?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reddit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type MassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mass'] = ResolversParentTypes['Mass']> = {
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type MissionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MissionResult'] = ResolversParentTypes['MissionResult']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationDelete_UsersArgs, 'where'>>,
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationInsert_UsersArgs, 'objects'>>,
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationUpdate_UsersArgs, 'where'>>,
};

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID'
}

export type PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = {
  customers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  norad_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  orbit_params?: Resolver<Maybe<ResolversTypes['PayloadOrbitParams']>, ParentType, ContextType>,
  orbit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  payload_mass_kg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  payload_mass_lbs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  payload_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type PayloadOrbitParamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayloadOrbitParams'] = ResolversParentTypes['PayloadOrbitParams']> = {
  apoapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  arg_of_pericenter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  epoch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  inclination_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lifespan_years?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mean_anomaly?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mean_motion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  periapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  period_min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  raan?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  reference_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  regime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  semi_major_axis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, QueryUsersArgs>,
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, QueryUsers_AggregateArgs>,
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<QueryUsers_By_PkArgs, 'id'>>,
  capsules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, QueryCapsulesArgs>,
  capsulesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, QueryCapsulesPastArgs>,
  capsulesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, QueryCapsulesUpcomingArgs>,
  capsule?: Resolver<Maybe<ResolversTypes['Capsule']>, ParentType, ContextType, RequireFields<QueryCapsuleArgs, 'id'>>,
  company?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>,
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, QueryCoresArgs>,
  coresPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, QueryCoresPastArgs>,
  coresUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, QueryCoresUpcomingArgs>,
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType, RequireFields<QueryCoreArgs, 'id'>>,
  dragons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dragon']>>>, ParentType, ContextType, QueryDragonsArgs>,
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType, RequireFields<QueryDragonArgs, 'id'>>,
  histories?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType, QueryHistoriesArgs>,
  historiesResult?: Resolver<Maybe<ResolversTypes['HistoriesResult']>, ParentType, ContextType, QueryHistoriesResultArgs>,
  history?: Resolver<Maybe<ResolversTypes['History']>, ParentType, ContextType, RequireFields<QueryHistoryArgs, 'id'>>,
  landpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Landpad']>>>, ParentType, ContextType, QueryLandpadsArgs>,
  landpad?: Resolver<Maybe<ResolversTypes['Landpad']>, ParentType, ContextType, RequireFields<QueryLandpadArgs, 'id'>>,
  launches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, QueryLaunchesArgs>,
  launchesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, QueryLaunchesPastArgs>,
  launchesPastResult?: Resolver<Maybe<ResolversTypes['LaunchesPastResult']>, ParentType, ContextType, QueryLaunchesPastResultArgs>,
  launchesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, QueryLaunchesUpcomingArgs>,
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, 'id'>>,
  launchLatest?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, QueryLaunchLatestArgs>,
  launchNext?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, QueryLaunchNextArgs>,
  launchpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launchpad']>>>, ParentType, ContextType, QueryLaunchpadsArgs>,
  launchpad?: Resolver<Maybe<ResolversTypes['Launchpad']>, ParentType, ContextType, RequireFields<QueryLaunchpadArgs, 'id'>>,
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType, QueryMissionsArgs>,
  missionsResult?: Resolver<Maybe<ResolversTypes['MissionResult']>, ParentType, ContextType, QueryMissionsResultArgs>,
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType, RequireFields<QueryMissionArgs, 'id'>>,
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType, QueryPayloadsArgs>,
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType, RequireFields<QueryPayloadArgs, 'id'>>,
  roadster?: Resolver<Maybe<ResolversTypes['Roadster']>, ParentType, ContextType>,
  rockets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType, QueryRocketsArgs>,
  rocketsResult?: Resolver<Maybe<ResolversTypes['RocketsResult']>, ParentType, ContextType, QueryRocketsResultArgs>,
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType, RequireFields<QueryRocketArgs, 'id'>>,
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType, QueryShipsArgs>,
  shipsResult?: Resolver<Maybe<ResolversTypes['ShipsResult']>, ParentType, ContextType, QueryShipsResultArgs>,
  ship?: Resolver<Maybe<ResolversTypes['Ship']>, ParentType, ContextType, RequireFields<QueryShipArgs, 'id'>>,
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RoadsterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Roadster'] = ResolversParentTypes['Roadster']> = {
  apoapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  earth_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  earth_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  epoch_jd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  inclination?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  launch_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  launch_mass_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mars_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mars_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  norad_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  orbit_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  periapsis_arg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  periapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  period_days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  semi_major_axis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  speed_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  speed_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  boosters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  cost_per_launch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  engines?: Resolver<Maybe<ResolversTypes['RocketEngines']>, ParentType, ContextType>,
  first_flight?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  first_stage?: Resolver<Maybe<ResolversTypes['RocketFirstStage']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  landing_legs?: Resolver<Maybe<ResolversTypes['RocketLandingLegs']>, ParentType, ContextType>,
  mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  payload_weights?: Resolver<Maybe<Array<Maybe<ResolversTypes['RocketPayloadWeight']>>>, ParentType, ContextType>,
  second_stage?: Resolver<Maybe<ResolversTypes['RocketSecondStage']>, ParentType, ContextType>,
  stages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  success_rate_pct?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketEnginesResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketEngines'] = ResolversParentTypes['RocketEngines']> = {
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  engine_loss_max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  propellant_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  propellant_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  thrust_to_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketFirstStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketFirstStage'] = ResolversParentTypes['RocketFirstStage']> = {
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  reusable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketLandingLegsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketLandingLegs'] = ResolversParentTypes['RocketLandingLegs']> = {
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketPayloadWeightResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketPayloadWeight'] = ResolversParentTypes['RocketPayloadWeight']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketSecondStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketSecondStage'] = ResolversParentTypes['RocketSecondStage']> = {
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  payloads?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloads']>, ParentType, ContextType>,
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketSecondStagePayloadCompositeFairingResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketSecondStagePayloadCompositeFairing'] = ResolversParentTypes['RocketSecondStagePayloadCompositeFairing']> = {
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketSecondStagePayloadsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketSecondStagePayloads'] = ResolversParentTypes['RocketSecondStagePayloads']> = {
  option_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  composite_fairing?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloadCompositeFairing']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type RocketsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RocketsResult'] = ResolversParentTypes['RocketsResult']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ShipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ship'] = ResolversParentTypes['Ship']> = {
  abs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  attempted_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  course_deg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  home_port?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  imo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipMission']>>>, ParentType, ContextType>,
  mmsi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['ShipLocation']>, ParentType, ContextType>,
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  speed_kn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  weight_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  weight_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  year_built?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ShipLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipLocation'] = ResolversParentTypes['ShipLocation']> = {
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ShipMissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipMission'] = ResolversParentTypes['ShipMission']> = {
  flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ShipsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipsResult'] = ResolversParentTypes['ShipsResult']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, SubscriptionUsersArgs>,
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, SubscriptionUsers_AggregateArgs>,
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<SubscriptionUsers_By_PkArgs, 'id'>>,
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz'
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timestamp?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Users_Aggregate_FieldsCountArgs>,
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>,
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid'
}

export type VolumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volume'] = ResolversParentTypes['Volume']> = {
  cubic_feet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  cubic_meters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>,
  Capsule?: CapsuleResolvers<ContextType>,
  CapsuleMission?: CapsuleMissionResolvers<ContextType>,
  Core?: CoreResolvers<ContextType>,
  CoreMission?: CoreMissionResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Distance?: DistanceResolvers<ContextType>,
  Dragon?: DragonResolvers<ContextType>,
  DragonHeatShield?: DragonHeatShieldResolvers<ContextType>,
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers<ContextType>,
  DragonThrust?: DragonThrustResolvers<ContextType>,
  DragonTrunk?: DragonTrunkResolvers<ContextType>,
  DragonTrunkCargo?: DragonTrunkCargoResolvers<ContextType>,
  Force?: ForceResolvers<ContextType>,
  HistoriesResult?: HistoriesResultResolvers<ContextType>,
  History?: HistoryResolvers<ContextType>,
  Info?: InfoResolvers<ContextType>,
  InfoLinks?: InfoLinksResolvers<ContextType>,
  Landpad?: LandpadResolvers<ContextType>,
  Launch?: LaunchResolvers<ContextType>,
  LaunchesPastResult?: LaunchesPastResultResolvers<ContextType>,
  LaunchLinks?: LaunchLinksResolvers<ContextType>,
  Launchpad?: LaunchpadResolvers<ContextType>,
  LaunchRocket?: LaunchRocketResolvers<ContextType>,
  LaunchRocketFairings?: LaunchRocketFairingsResolvers<ContextType>,
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers<ContextType>,
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers<ContextType>,
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers<ContextType>,
  LaunchSite?: LaunchSiteResolvers<ContextType>,
  LaunchTelemetry?: LaunchTelemetryResolvers<ContextType>,
  Link?: LinkResolvers<ContextType>,
  Location?: LocationResolvers<ContextType>,
  Mass?: MassResolvers<ContextType>,
  Mission?: MissionResolvers<ContextType>,
  MissionResult?: MissionResultResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  ObjectID?: GraphQLScalarType,
  Payload?: PayloadResolvers<ContextType>,
  PayloadOrbitParams?: PayloadOrbitParamsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Result?: ResultResolvers<ContextType>,
  Roadster?: RoadsterResolvers<ContextType>,
  Rocket?: RocketResolvers<ContextType>,
  RocketEngines?: RocketEnginesResolvers<ContextType>,
  RocketFirstStage?: RocketFirstStageResolvers<ContextType>,
  RocketLandingLegs?: RocketLandingLegsResolvers<ContextType>,
  RocketPayloadWeight?: RocketPayloadWeightResolvers<ContextType>,
  RocketSecondStage?: RocketSecondStageResolvers<ContextType>,
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers<ContextType>,
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers<ContextType>,
  RocketsResult?: RocketsResultResolvers<ContextType>,
  Ship?: ShipResolvers<ContextType>,
  ShipLocation?: ShipLocationResolvers<ContextType>,
  ShipMission?: ShipMissionResolvers<ContextType>,
  ShipsResult?: ShipsResultResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  timestamptz?: GraphQLScalarType,
  users?: UsersResolvers<ContextType>,
  users_aggregate?: Users_AggregateResolvers<ContextType>,
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>,
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>,
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>,
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>,
  uuid?: GraphQLScalarType,
  Volume?: VolumeResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

import gql from 'graphql-tag';
