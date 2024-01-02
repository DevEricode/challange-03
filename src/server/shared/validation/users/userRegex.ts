export const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
export const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
export const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
export const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const addressRegex = /^[a-zA-Z0-9\s\\.,#-]+$/;