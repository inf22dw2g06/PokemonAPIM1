const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Pokedex ISMAI",
    description: "A pokemon pokedex with some modifications",
    contact: {
      name: "id043243",
      email: "A043243@umaia.pt"
    },
    version: "1.0.0"
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "My localhost",
      variables: {
        basePath: {
          default: "/"
        }
      }
    }
  ],
  paths: {
    "/pokemons/{id}": {
      get: {
        tags: [
          "PokemonData"
        ],
        summary: "Finds pokemon info by Id",
        operationId: "GetInfoID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 0,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Retrieve pokemon id 1",
                value: 1
              },
              two: {
                summary: "Retrieve pokemon id 2",
                value: 2
              }
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokemons"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokemonData"
      },
      put: {
        tags: [
          "PokemonData"
        ],
        summary: "Update status",
        operationId: "updateStatus",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 0,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Retrieve pokemon id 1",
                value: 1
              },
              two: {
                summary: "Retrieve pokemon id 2",
                value: 2
              }
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/pokemons"
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokemons"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokemonData"
      },
      delete: {
        tags: [
          "PokemonData"
        ],
        summary: "Delete pokemon entry",
        operationId: "deletePokemonEntry",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Delete pokemon id 1",
                value: 1
              },
              two: {
                summary: "Delete pokemon id 2",
                value: 2
              }
            }
          }
        ],
        responses: {
          204: {
            description: "No Content"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokemonData"
      }
    },
    "/pokemons/regions": {
      get: {
        tags: [
          "PokemonData"
        ],
        summary: "Finds pokemons by Region",
        operationId: "pokemonRegion",
        parameters: [
          {
            name: "id",
            in: "query",
            required: true,
            style: "form",
            explode: true,
            schema: {
              type: "integer",
              format: "int64"
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/regions"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokemonData"
      }
    },
    "/pokemons": {
      get: {
        tags: [
          "PokemonData"
        ],
        summary: "Finds pokemons",
        operationId: "findspokedata",
        responses: {
          200: {
            description: "Array of pokemons model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/pokemons"
                  },
                  "x-content-type": "application/json"
                }
              },
              "application/xml": {
                schema: {
                  type: "array",
                  xml: {
                    name: "pokemon"
                  },
                  items: {
                    $ref: "#/components/schemas/pokemons"
                  }
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "PokemonData"
      },
      post: {
        tags: [
          "PokemonData"
        ],
        summary: "Create pokemon entry",
        operationId: "createPokemon",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/pokemons"
              }
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/pokemons"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Create a pokemon model instances",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokemons"
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "PokemonData"
      }
    },
    "/pokemonregions/{id}":{
      get:{
        tags:[
          "PokemonRegion"
        ],
        summary: "Finds pokemons by Region",
        operationId: "pokemonRegion",
        parameters:[
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: true,
            schema:{
              type: "integer",
              format: "int64"
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokemonsregions"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokemonData"
      }
    },
    "/regions": {
      get: {
        tags: [
          "RegionData"
        ],
        summary: "Finds regions",
        operationId: "findsRegions",
        responses: {
          200: {
            description: "Array of regions model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/regions"
                  },
                  "x-content-type": "application/json"
                }
              },
              "application/xml": {
                schema: {
                  type: "array",
                  xml: {
                    name: "region"
                  },
                  items: {
                    $ref: "#/components/schemas/regions"
                  }
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "RegionData"
      },
      post: {
        tags: [
          "RegionData"
        ],
        summary: "Create region entry",
        operationId: "createRegion",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/regions"
              }
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/regions"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Create a region model instances",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/regions"
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "RegionData"
      }
    },
    "/regions/{id}": {
      get: {
        tags: [
          "RegionData"
        ],
        summary: "Finds region info by Id",
        operationId: "RegionId",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 0,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Retrieve region id 1",
                value: 1
              },
              two: {
                summary: "Retrieve region id 2",
                value: 2
              }
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/regions"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "RegionData"
      },
    },
    "/berries/{id}": {
      get: {
        tags: [
          "BerriesData"
        ],
        summary: "Finds berries info by id",
        operationId: "berriesId",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 0,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Retrieve berry id 1",
                value: 1
              },
              two: {
                summary: "Retrieve berry id 2",
                value: 2
              }
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/berries"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "BerriesData"
      }
    },
    "/berries": {
      get: {
        tags: [
          "BerriesData"
        ],
        summary: "Finds berries",
        operationId: "Berries",
        responses: {
          200: {
            description: "Array of berries model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/berries"
                  },
                  "x-content-type": "application/json"
                }
              },
              "application/xml": {
                schema: {
                  type: "array",
                  xml: {
                    name: "berries"
                  },
                  items: {
                    $ref: "#/components/schemas/berries"
                  }
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "BerriesData"
      },
      post: {
        tags: [
          "BerriesData"
        ],
        summary: "Create berries entry",
        operationId: "createBerries",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/berries"
              }
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/berries"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Create a berries model instances",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/berries"
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "BerriesData"
      }
    },
    "/pokeballs/{id}": {
      get: {
        tags: [
          "PokeballsData"
        ],
        summary: "Finds pokeball info by id",
        operationId: "PokeballId",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 0,
              type: "integer",
              format: "int64"
            },
            examples: {
              one: {
                summary: "Retrieve pokeball id 1",
                value: 1
              },
              two: {
                summary: "Retrieve pokeball id 2",
                value: 2
              }
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokeballs"
                }
              }
            }
          },
          400: {
            description: "Bad request"
          },
          404: {
            description: "id not found"
          }
        },
        "x-swagger-router-controller": "PokeballsData"
      }
    },
    "/pokeballs": {
      get: {
        tags: [
          "PokeballsData"
        ],
        summary: "Finds pokeballs",
        operationId: "Pokeballs",
        responses: {
          200: {
            description: "Array of pokeballs model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/pokeballs"
                  },
                  "x-content-type": "application/json"
                }
              },
              "application/xml": {
                schema: {
                  type: "array",
                  xml: {
                    name: "pokeballs"
                  },
                  items: {
                    $ref: "#/components/schemas/pokeballs"
                  }
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "PokeballsData"
      },
      post: {
        tags: [
          "PokeballsData"
        ],
        summary: "Create pokeball entry",
        operationId: "createPokeball",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/pokeballs"
              }
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/pokeballs"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Create a pokeball model instances",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pokeballs"
                }
              }
            }
          }
        },
        "x-swagger-router-controller": "PokeballsData"
      }
    }
  },
  components: {
    schemas: {
      pokemons: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64"
          },
          name: {
            type: "string"
          },
          state: {
            type: "string"
          },
          RegionId: {
            type: "integer",
            format: "int64"
          }
        },
        example: {
          id: 0,
          name: "Bulbasaur",
          state: "Happy",
          RegionId: 1
        },
        xml: {
          name: "pokemon"
        }
      },
      regions: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64"
          },
          name: {
            type: "string"
          },
          cardinal_point: {
            type: "string"
          }
        },
        example: {
          id: 0,
          name: "Shinnoh",
          cardinal_point: "North"
        },
        xml: {
          name: "Region"
        }
      },
      pokeballs: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64"
          },
          name: {
            type: "string"
          },
          color: {
            type: "string"
          },
          quantity: {
            type: "integer",
            format: "int64"
          },
        },
        xml: {
          name: "Pokeballs"
        }
      },
      berries: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64"
          },
          name: {
            type: "string"
          },
          ability: {
            type: "string"
          }
        },
        example: {
          id: 0,
          name: "name",
          ability: "ability"
        },
        xml: {
          name: "berries"
        }
      }
    },
    securitySchemes: {
      OAuth2Security: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: [],
          },
        },
      },
    },
  },
  security: [{ OAuth2Security: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;