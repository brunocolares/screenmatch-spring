package br.com.colares.screenmatch_spring.service;

public interface IConverteDados {
    <T> T obterDados(String json, Class<T> classe);
}
