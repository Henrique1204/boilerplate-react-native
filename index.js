#!/usr/bin/env node

const { formatArgs } = require('./src/core/utils/formart-args');

const init = async () => {
  try {
    const { name } = formatArgs();

    if (!name) throw new Error('O nome da mfe precisa ser informado.');
  } catch ({ message }) {
    console.error('[ERROR]', message, '\n');
  }
};

module.exports = init;
