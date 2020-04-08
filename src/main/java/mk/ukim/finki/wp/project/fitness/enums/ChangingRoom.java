package mk.ukim.finki.wp.project.fitness.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ChangingRoom {
    Male("Ова е машката соблекувална"),
    Female("Ова е женската соблекувална");

    private String description;
}
