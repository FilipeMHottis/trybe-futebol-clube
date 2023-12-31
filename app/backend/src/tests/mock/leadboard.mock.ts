import ILeaderbords from '../../interfaces/ILaaderboards';

const leaderboardsMock: ILeaderbords[] = [
    {
        name: 'Palmeiras',
        totalPoints: 13,
        totalGames: 5,
        totalVictories: 4,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 17,
        goalsOwn: 5,
        goalsBalance: 12,
        efficiency: 86.67
    },
    {
        name: 'Corinthians',
        totalPoints: 12,
        totalGames: 5,
        totalVictories: 4,
        totalDraws: 0,
        totalLosses: 1,
        goalsFavor: 12,
        goalsOwn: 3,
        goalsBalance: 9,
        efficiency: 80
    },
    {
        name: 'Santos',
        totalPoints: 11,
        totalGames: 5,
        totalVictories: 3,
        totalDraws: 2,
        totalLosses: 0,
        goalsFavor: 12,
        goalsOwn: 6,
        goalsBalance: 6,
        efficiency: 73.33
    },
    {
        name: 'Grêmio',
        totalPoints: 10,
        totalGames: 5,
        totalVictories: 3,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 9,
        goalsOwn: 8,
        goalsBalance: 1,
        efficiency: 66.67
    },
    {
        name: 'Internacional',
        totalPoints: 10,
        totalGames: 5,
        totalVictories: 3,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 7,
        goalsOwn: 6,
        goalsBalance: 1,
        efficiency: 66.67
    },
    {
        name: 'Real Brasília',
        totalPoints: 10,
        totalGames: 5,
        totalVictories: 3,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 5,
        goalsOwn: 4,
        goalsBalance: 1,
        efficiency: 66.67
    },
    {
        name: 'São Paulo',
        totalPoints: 8,
        totalGames: 5,
        totalVictories: 2,
        totalDraws: 2,
        totalLosses: 1,
        goalsFavor: 9,
        goalsOwn: 6,
        goalsBalance: 3,
        efficiency: 53.33
    },
    {
        name: 'Flamengo',
        totalPoints: 8,
        totalGames: 6,
        totalVictories: 2,
        totalDraws: 2,
        totalLosses: 2,
        goalsFavor: 5,
        goalsOwn: 5,
        goalsBalance: 0,
        efficiency: 44.44
    },
    {
        name: 'Ferroviária',
        totalPoints: 7,
        totalGames: 5,
        totalVictories: 2,
        totalDraws: 1,
        totalLosses: 2,
        goalsFavor: 7,
        goalsOwn: 7,
        goalsBalance: 0,
        efficiency: 46.67
    },
    {
        name: 'São José-SP',
        totalPoints: 6,
        totalGames: 5,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 3,
        goalsFavor: 5,
        goalsOwn: 6,
        goalsBalance: -1,
        efficiency: 40
    },
    {
        name: 'Cruzeiro',
        totalPoints: 4,
        totalGames: 5,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 3,
        goalsFavor: 8,
        goalsOwn: 10,
        goalsBalance: -2,
        efficiency: 26.67
    },
    {
        name: 'Avaí/Kindermann',
        totalPoints: 4,
        totalGames: 5,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 3,
        goalsFavor: 4,
        goalsOwn: 8,
        goalsBalance: -4,
        efficiency: 26.67
    },
    {
        name: 'Botafogo',
        totalPoints: 4,
        totalGames: 5,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 3,
        goalsFavor: 3,
        goalsOwn: 8,
        goalsBalance: -5,
        efficiency: 26.67
    },
    {
        name: 'Bahia',
        totalPoints: 2,
        totalGames: 5,
        totalVictories: 0,
        totalDraws: 2,
        totalLosses: 3,
        goalsFavor: 2,
        goalsOwn: 6,
        goalsBalance: -4,
        efficiency: 13.33
    },
    {
        name: 'Minas Brasília',
        totalPoints: 2,
        totalGames: 5,
        totalVictories: 0,
        totalDraws: 2,
        totalLosses: 3,
        goalsFavor: 4,
        goalsOwn: 9,
        goalsBalance: -5,
        efficiency: 13.33
    },
    {
        name: 'Napoli-SC',
        totalPoints: 2,
        totalGames: 6,
        totalVictories: 0,
        totalDraws: 2,
        totalLosses: 4,
        goalsFavor: 3,
        goalsOwn: 15,
        goalsBalance: -12,
        efficiency: 11.11
    }
]

const leaderboardsHomeMock: ILeaderbords[] = [
    {
      name: 'Santos',
      totalVictories: 3,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 9,
      goalsOwn: 3,
      goalsBalance: 6,
      totalPoints: 9,
      totalGames: 3,
      efficiency: 100
    },
    {
      name: 'Palmeiras',
      totalVictories: 2,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 10,
      goalsOwn: 5,
      goalsBalance: 5,
      totalPoints: 7,
      totalGames: 3,
      efficiency: 77.78
    },
    {
      name: 'Corinthians',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 6,
      goalsOwn: 1,
      goalsBalance: 5,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name: 'Grêmio',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 4,
      goalsOwn: 1,
      goalsBalance: 3,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name: 'Real Brasília',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 0,
      goalsBalance: 2,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name:'São Paulo',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 4,
      goalsOwn: 1,
      goalsBalance: 3,
      totalPoints: 4,
      totalGames: 2,
      efficiency: 66.67
    },
    {
      name: 'Flamengo',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 4,
      goalsOwn: 2,
      goalsBalance: 2,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Internacional',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 4,
      goalsOwn: 6,
      goalsBalance: -2,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Botafogo',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 2,
      goalsOwn: 4,
      goalsBalance: -2,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Ferroviária',
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 3,
      goalsOwn: 2,
      goalsBalance: 1,
      totalPoints: 3,
      totalGames: 2,
      efficiency: 50
    },
    {
      name: 'Napoli-SC',
      totalVictories: 0,
      totalDraws: 2,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 2,
      goalsBalance: 0,
      totalPoints: 2,
      totalGames: 2,
      efficiency: 33.33
    },
    {
      name: 'Cruzeiro',
      totalVictories: 0,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 2,
      goalsOwn: 3,
      goalsBalance: -1,
      totalPoints: 1,
      totalGames: 2,
      efficiency: 16.67
    },
    {
      name: 'Minas Brasília',
      totalVictories: 0,
      totalDraws: 1,
      totalLosses: 2,
      goalsFavor: 3,
      goalsOwn: 6,
      goalsBalance: -3,
      totalPoints: 1,
      totalGames: 3,
      efficiency: 11.11
    },
    {
      name: 'Avaí/Kindermann',
      totalVictories: 0,
      totalDraws: 1,
      totalLosses: 2,
      goalsFavor: 3,
      goalsOwn: 7,
      goalsBalance: -4,
      totalPoints: 1,
      totalGames: 3,
      efficiency: 11.11
    },
    {
      name: 'São José-SP',
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 3,
      goalsFavor: 2,
      goalsOwn: 5,
      goalsBalance: -3,
      totalPoints: 0,
      totalGames: 3,
      efficiency: 0
    },
    {
      name: 'Bahia',
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 3,
      goalsFavor: 0,
      goalsOwn: 4,
      goalsBalance: -4,
      totalPoints: 0,
      totalGames: 3,
      efficiency: 0
    }
]

const leaderboardsAwayMock: ILeaderbords[] = [
    {
      name: 'Palmeiras',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 7,
      goalsOwn: 0,
      goalsBalance: 7,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name: 'Corinthians',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 6,
      goalsOwn: 2,
      goalsBalance: 4,
      totalPoints: 6,
      totalGames: 3,
      efficiency: 66.67
    },
    {
      name: 'Internacional',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 3,
      goalsOwn: 0,
      goalsBalance: 3,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name: 'São José-SP',
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 3,
      goalsOwn: 1,
      goalsBalance: 2,
      totalPoints: 6,
      totalGames: 2,
      efficiency: 100
    },
    {
      name: 'São Paulo',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 5,
      goalsOwn: 5,
      goalsBalance: 0,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Ferroviária',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 4,
      goalsOwn: 5,
      goalsBalance: -1,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Real Brasília',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 3,
      goalsOwn: 4,
      goalsBalance: -1,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Grêmio',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 5,
      goalsOwn: 7,
      goalsBalance: -2,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Flamengo',
      totalVictories: 1,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 1,
      goalsOwn: 3,
      goalsBalance: -2,
      totalPoints: 4,
      totalGames: 3,
      efficiency: 44.44
    },
    {
      name: 'Avaí/Kindermann',
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 1,
      goalsOwn: 1,
      goalsBalance: 0,
      totalPoints: 3,
      totalGames: 2,
      efficiency: 50
    },
    {
      name: 'Cruzeiro',
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 2,
      goalsFavor: 6,
      goalsOwn: 7,
      goalsBalance: -1,
      totalPoints: 3,
      totalGames: 3,
      efficiency: 33.33
    },
    {
      name: 'Santos',
      totalVictories: 0,
      totalDraws: 2,
      totalLosses: 0,
      goalsFavor: 3,
      goalsOwn: 3,
      goalsBalance: 0,
      totalPoints: 2,
      totalGames: 2,
      efficiency: 33.33
    },
    {
      name: 'Bahia',
      totalVictories: 0,
      totalDraws: 2,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 2,
      goalsBalance: 0,
      totalPoints: 2,
      totalGames: 2,
      efficiency: 33.33
    },
    {
      name: 'Minas Brasília',
      totalVictories: 0,
      totalDraws: 1,
      totalLosses: 1,
      goalsFavor: 1,
      goalsOwn: 3,
      goalsBalance: -2,
      totalPoints: 1,
      totalGames: 2,
      efficiency: 16.67
    },
    {
      name: 'Botafogo',
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 2,
      goalsFavor: 1,
      goalsOwn: 4,
      goalsBalance: -3,
      totalPoints: 0,
      totalGames: 2,
      efficiency: 0
    },
    {
      name: 'Napoli-SC',
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 4,
      goalsFavor: 1,
      goalsOwn: 13,
      goalsBalance: -12,
      totalPoints: 0,
      totalGames: 4,
      efficiency: 0
    }
]

export { leaderboardsMock, leaderboardsHomeMock, leaderboardsAwayMock };
