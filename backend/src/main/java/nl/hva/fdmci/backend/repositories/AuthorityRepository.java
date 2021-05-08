package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.Authority;

import java.util.List;

public class AuthorityRepository {
  private final List<Authority> authorityList;
  int id = 1;

  public AuthorityRepository(List<Authority> authorityList) {
    this.authorityList = authorityList;
    for (int i = id; i < 4; i++) {
      this.createRandomAuthority(id);
      id++;
    }
  }

    public Authority save (Authority authority){
      if (authority.getId() == 0) {
        authority.setId(id);
        id++;
        this.authorityList.add(authority);
      }
      return authority;
    }

    public List<Authority> findAll () {
      return this.authorityList;
    }

    private void createRandomAuthority ( int id){
      this.authorityList.add(Authority.createRandom(id));
    }


  }
