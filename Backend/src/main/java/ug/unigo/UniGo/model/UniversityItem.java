package ug.unigo.UniGo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;


@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UniversityItem {
    @MongoId
    private String id;
    private String university;
    private String city;
    private String faculty;
    private String fieldOfStudy;
    private String title;
    private String website;
    private List<String> interests;
    private String logoURL;
}