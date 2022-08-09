const playerKey = "player"

export function savePlayerName(name:string) {
    localStorage.setItem(playerKey, name);
}

export function getPlayerName():string {
    return localStorage.getItem(playerKey) || "";
}