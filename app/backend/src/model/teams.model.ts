import ITeams from '../interfaces/db/ITeams';
import Teams from '../database/models/teamsModel';

interface TeamModel {
  getAllTeams(): Promise<ITeams[]>;
  getById(id: number): Promise<ITeams | null>;
}

class TeamsModel implements TeamModel {
  private db = Teams;

  public async getAllTeams(): Promise<ITeams[]> {
    const teams = await this.db.findAll();
    return teams;
  }

  public async getById(id: number): Promise<ITeams | null> {
    const team = await this.db.findByPk(id);
    return team;
  }
}

export default TeamsModel;
