/**
 * Método para validar se o valor recebido é uma string vazia ou nulo.
 *
 * @params Valor que deve ser comparado.
 *
 * @return Valor booleano que indica se o valor é uma string vazia ou nulo.
 */
const isEmptyString = (value: string | null | undefined): boolean => {
	return value?.trim() === '' || value === null || value === undefined;
};

export default isEmptyString;
