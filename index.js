#!/usr/bin/env node

const { formartArgs } = require('./src/core/utils/formartArgs');
const { copyStructure } = require('./src/core/steps/copyStructure');

const init = async () => {
  try {
    const { name } = formartArgs();

    if (!name) throw new Error('O nome da mfe precisa ser informado.');

    await copyStructure();
  } catch ({ message }) {
    console.error('[ERROR]', message, '\n');
  }
};

module.exports = init;
