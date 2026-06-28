const styles = getComputedStyle(document.documentElement);

export function get(variable) {
    return styles.getPropertyValue(variable).trim();
}