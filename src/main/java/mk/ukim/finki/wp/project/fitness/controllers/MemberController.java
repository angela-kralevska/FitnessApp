package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Member;
import mk.ukim.finki.wp.project.fitness.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/members", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Member createMember(@RequestParam("memberId") Integer memberId,
                               @RequestParam("firstName") String firstName,
                               @RequestParam("lastName") String lastName,
                               @RequestParam("address") String address,
                               @RequestParam("phone") String phone,
                               @RequestParam(value = "lastPaymentId", required = false) Integer lastPaymentId
                               ) {

        Member result = memberService.createMember(memberId, firstName, lastName, address, phone, lastPaymentId);
        return result;
    }

    @GetMapping
    public Page<Member> getAllMembers(@RequestHeader(name = "page", defaultValue = "0", required = false) int page,
                                      @RequestHeader(name = "page-size", defaultValue = "10", required = false) int size) {
        return memberService.getAllMembers(page, size);
    }

    @GetMapping(params = "term")
    public List<Member> searchMembers(@RequestParam String term) {
        return memberService.searchMembers(term);
    }

    @PatchMapping("/{memberId}")
    public Member updateMember(@PathVariable int memberId,
                               @RequestParam String firstName,
                               @RequestParam String lastName,
                               @RequestParam String address,
                               @RequestParam String phone,
                               @RequestParam(value = "lastPaymentId", required = false) Integer lastPaymentId
                               ){
        return memberService.updateMember(memberId, firstName, lastName, address, phone, lastPaymentId);
    }

    @DeleteMapping("/{memberId}")
    public Member deleteMember(@PathVariable int memberId) {
        return this.memberService.deleteMember(memberId);
    }

    @GetMapping("/{memberId}")
    public Member getMember(@PathVariable int memberId) {
        return this.memberService.getMember(memberId);
    }



}
