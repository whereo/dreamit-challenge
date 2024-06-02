import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  draw?: Maybe<Draw>;
};

export type QueryDrawArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type Draw = {
  __typename?: "draw";
  backendError?: Maybe<Scalars["String"]["output"]>;
  draws?: Maybe<Array<Maybe<ModelDraw>>>;
  success: Scalars["Boolean"]["output"];
  visibleErrors: VisibleErrors;
};

export type ModelDraw = {
  __typename?: "modelDraw";
  additionalNumbers?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  date?: Maybe<Scalars["String"]["output"]>;
  gameAmount?: Maybe<Scalars["Int"]["output"]>;
  jackpot?: Maybe<Scalars["Int"]["output"]>;
  megaPlier?: Maybe<Scalars["String"]["output"]>;
  numbers?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  odds?: Maybe<Array<Maybe<ModelOdd>>>;
  powerPlay?: Maybe<Scalars["String"]["output"]>;
  shares?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  time?: Maybe<Scalars["String"]["output"]>;
  video?: Maybe<Scalars["String"]["output"]>;
};

export type ModelOdd = {
  __typename?: "modelOdd";
  link?: Maybe<Scalars["String"]["output"]>;
  numberOfWinners?: Maybe<Scalars["Int"]["output"]>;
  numbers?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  odd?: Maybe<Scalars["Int"]["output"]>;
  winningClass?: Maybe<Scalars["Int"]["output"]>;
  withOptions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type VisibleErrors = {
  __typename?: "visibleErrors";
  error?: Maybe<Scalars["String"]["output"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  draw: ResolverTypeWrapper<Draw>;
  modelDraw: ResolverTypeWrapper<ModelDraw>;
  modelOdd: ResolverTypeWrapper<ModelOdd>;
  visibleErrors: ResolverTypeWrapper<VisibleErrors>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Int: Scalars["Int"]["output"];
  Query: {};
  String: Scalars["String"]["output"];
  draw: Draw;
  modelDraw: ModelDraw;
  modelOdd: ModelOdd;
  visibleErrors: VisibleErrors;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  draw?: Resolver<
    Maybe<ResolversTypes["draw"]>,
    ParentType,
    ContextType,
    Partial<QueryDrawArgs>
  >;
};

export type DrawResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["draw"] = ResolversParentTypes["draw"],
> = {
  backendError?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  draws?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["modelDraw"]>>>,
    ParentType,
    ContextType
  >;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  visibleErrors?: Resolver<
    ResolversTypes["visibleErrors"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelDrawResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["modelDraw"] = ResolversParentTypes["modelDraw"],
> = {
  additionalNumbers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  gameAmount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  jackpot?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  megaPlier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  numbers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  odds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["modelOdd"]>>>,
    ParentType,
    ContextType
  >;
  powerPlay?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shares?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  time?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelOddResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["modelOdd"] = ResolversParentTypes["modelOdd"],
> = {
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  numberOfWinners?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numbers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  odd?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  winningClass?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  withOptions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisibleErrorsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["visibleErrors"] = ResolversParentTypes["visibleErrors"],
> = {
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  draw?: DrawResolvers<ContextType>;
  modelDraw?: ModelDrawResolvers<ContextType>;
  modelOdd?: ModelOddResolvers<ContextType>;
  visibleErrors?: VisibleErrorsResolvers<ContextType>;
};
