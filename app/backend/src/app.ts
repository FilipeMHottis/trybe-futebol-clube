import * as express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerJson from './swagger.json';
import 'express-async-errors';

import errorMiddleware from './middlewares/errorMiddleware';

import TeamsRouter from './router/temas.router';
import LoginRouter from './router/login.router';
import MatchesRouter from './router/matches.router';
import LeaderboardRouter from './router/leadboards.router';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));

    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
    // Mantenha ele sempre como o último middleware a ser chamado
    this.app.use(errorMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/teams', TeamsRouter);
    this.app.use('/login', LoginRouter);
    this.app.use('/matches', MatchesRouter);
    this.app.use('/leaderboard', LeaderboardRouter);
    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
