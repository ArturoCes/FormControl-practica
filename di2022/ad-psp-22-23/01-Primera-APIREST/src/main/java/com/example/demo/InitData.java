package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Currency;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class InitData {

    private final CountryRepository repo;

    @PostConstruct
    public void init() {

        Country spain = new Country();
        spain.setCode("es");
        spain.setName("España");
        spain.setCapital("Madrid");
        spain.setCurrency(Currency.getInstance("EUR").getDisplayName());
        spain.setPopulation(47_326_687);

        repo.save(spain);

        Country portugal = new Country();
        portugal.setCode("pt");
        portugal.setName("Portugal");
        portugal.setCapital("Lisboa");
        portugal.setCurrency(Currency.getInstance("EUR").getDisplayName());
        portugal.setPopulation(10_298_252);

        repo.save(portugal);

        Country peru = new Country();
        peru.setCode("pe");
        peru.setName("Perú");
        peru.setCapital("Lima");
        peru.setCurrency(Currency.getInstance("PEN").getDisplayName());
        peru.setPopulation(33_738_178);

        repo.save(peru);


    }

}

    @GetMapping("/country/")
    //public List<Country> findAll() {
    public ResponseEntity<List<Country>> findAll() {
        //return repo.findAll();
        return ResponseEntity.ok(repo.findAll());
    }

    @GetMapping("/country/{code}")
    public ResponseEntity<Country> findByCode(
            @PathVariable String code
    ) {
        return ResponseEntity.of(repo.findFirstByCode(code));
    }
    @PostMapping("/country/")
    public ResponseEntity <Country> newCountry(@RequestBody Country country){

        Country newCountry = repo.save(country);
        return ResponseEntity.status
                        (HttpStatus.CREATED)
                .body(repo.save(newCountry));

    }
    @PutMapping("country/{id}")
    public ResponseEntity <Country> editCountry (@RequestBody Country country,
                                                 @PathVariable Long id) {
        return ResponseEntity.of(
                repo.findById(id)
                        .map(old -> {
                            old.setCapital(country.getCapital());
                            old.setCode(country.getCode());
                            old.setName(country.getName());
                            old.setCurrency(country.getCurrency());
                            old.setPopulation(country.getPopulation());
                            return Optional.of(repo.save(old));
                        })
                        .orElse(Optional.empty()));
    }

    @DeleteMapping ("/country/{id}")
    public ResponseEntity <Country> deleteCountry (@PathVariable Long id){
        if(repo.existsById(id))
            repo.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }