export function random(min, max, power = 1) {
    return Math.random() ** power * (max - min) + min;
}