
const router =  require('express').Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const AuthController = require('../controllers/authCtrl');
const PokemonsControllers = require('../controllers/pokemonsCtrl');
const RegionControllers = require('../controllers/regionsCtrl');
const PokeballsControllers = require('../controllers/pokeballsCtrl');
const BerriesController = require('../controllers/berriesCtrl');
const PokemonRegionController = require('../controllers/pokemonregionCtrl');


//PokemonsRoutes
router.get('/pokemons', PokemonsControllers.getAllPokemons);
router.get('/pokemons/:id', PokemonsControllers.getPokemon);
router.post('/pokemons', auth, PokemonsControllers.setPokemon);
router.put('/pokemons/:id', auth, PokemonsControllers.updatePokemon);
router.delete('/pokemons/:id', auth, PokemonsControllers.deletePokemon);

router.get('/pokemonsregions/:id', PokemonRegionController.getPokemonRegion);




//RegionRoutes
router.get('/regions', RegionControllers.getAllRegions);
router.get('/regions/:id', RegionControllers.getRegion);
router.post('/regions', auth, RegionControllers.setRegion);



//PokeballsRoutes
router.get('/pokeballs', PokeballsControllers.getAllPokeballs);
router.get('/pokeballs/:id', PokeballsControllers.getPokeball);
router.post('/pokeballs', auth, PokeballsControllers.setPokeball);



//BerriesRoutes
router.get('/berries', BerriesController.getAllBerries);
router.get('/berries/:id', BerriesController.getBerrie);
router.post('/berries', auth, BerriesController.setBerrie);


//AuthRoutes

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);



module.exports = router;
