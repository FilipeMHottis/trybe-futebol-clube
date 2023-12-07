import ITeams from '../Interfaces/db/ITeams';
import Teams from '../database/models/teamsModel';

interface TeamModel {
  getAllTeams(): Promise<ITeams[]>
}

class TeamsModel implements TeamModel {
  private db = Teams;

  public async getAllTeams(): Promise<ITeams[]> {
    const teams = await this.db.findAll();
    return teams;
  }
}

export default TeamsModel;
